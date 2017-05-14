from django.db import models
from allauth import app_settings as allauth_app_settings


class University(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    fields = models.ManyToManyField('Field', related_name='fields')

    class Meta:
        db_table = 'universities'
        verbose_name_plural = 'universities'

    def __str__(self):
        return self.name


class Field(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        db_table = 'fields'

    def __str__(self):
        return self.name


class Course(models.Model):
    name = models.CharField(max_length=255)
    fields = models.ManyToManyField('Field', related_name='courses')

    class Meta:
        db_table = 'courses'

    def __str__(self):
        return self.name


class Profile(models.Model):
    user = models.ForeignKey(allauth_app_settings.USER_MODEL, on_delete=models.CASCADE)
    universities = models.ManyToManyField('University', related_name='profiles')
    fields = models.ManyToManyField('Field', related_name='profiles')
    courses = models.ManyToManyField('Course', related_name='profiles')

    class Meta:
        db_table = 'profiles'

    def __str__(self):
        return self.user.username


class Record(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(null=True, blank=True)
    attachments = models.ManyToManyField('Attachment', related_name='records')
    courses = models.ManyToManyField('Course', related_name='records')
    created_by = models.ForeignKey('Profile', related_name='records')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'records'

    def __str__(self):
        return self.title


class Attachment(models.Model):
    file = models.FileField(upload_to='uploads/%Y/%m/%d/')
    created_by = models.ForeignKey('Profile', on_delete=models.SET_NULL, null=True,
                                   related_name='attachments')

    class Meta:
        db_table = 'attachments'


class Comment(models.Model):
    content = models.TextField()
    record = models.ForeignKey('Record', related_name='comments')
    created_by = models.ForeignKey('Profile', related_name='comments')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'comments'

    def __str__(self):
        return f'{self.created_by.__str__()} on {self.record.__str__()} at {self.created_at}'

