from django.apps import apps
from rest_framework import serializers

from allauth import app_settings as allauth_app_settings

from main import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = apps.get_model(allauth_app_settings.USER_MODEL)
        fields = ('username', 'email')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = ('content', 'record', 'created_by', 'created_at')


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.University
        fields = ('name', 'city', 'fields')


class FieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Field
        fields = ('name',)


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ('name', 'fields')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    comments = CommentSerializer(many=True)

    class Meta:
        model = models.Profile
        fields = ('user', 'universities', 'fields', 'courses', 'comments')


class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Attachment
        fields = ('name', 'file')


class RecordSerializer(serializers.ModelSerializer):
    attachments = AttachmentSerializer(many=True)
    courses = CourseSerializer(many=True)

    class Meta:
        model = models.Record
        fields = ('title', 'content', 'courses', 'attachments', 'comments')
