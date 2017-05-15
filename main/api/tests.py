import unittest

from django.apps import apps
from django.contrib.sites.models import Site

from allauth import app_settings as allauth_app_settings
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token

from main.models import Profile, University, Course


class UserViewTest(unittest.TestCase):
    def setUp(self):
        Site.objects.create(name='studnet', domain='studnet')
        User = apps.get_model(allauth_app_settings.USER_MODEL)
        self.user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
        self.profile = Profile.objects.create(user=self.user)
        # self.unis = University.objects.create(name='PUT', city='Poznań')

        self.client = APIClient()
        token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        self.client.login(username='john', password='johnpassword')

    def test_univerities_endpoint(self):
        r = self.client.get('/api/v1/univerities/')
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.data['count'], 0)
        self.assertEqual(r.data['results'], [])

        University.objects.create(name='PUT', city='Poznań')
        r = self.client.get('/api/v1/univerities/')
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.data['count'], 1)
        self.assertEqual(r.data['results'][0]['name'], 'PUT')

    def test_courses_endpoint(self):
        r = self.client.get('/api/v1/courses/')
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.data['count'], 0)
        self.assertEqual(r.data['results'], [])

        Course.objects.create(name='Computer Science')
        r = self.client.get('/api/v1/courses/')
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.data['count'], 1)
        self.assertEqual(r.data['results'][0]['name'], 'Computer Science')
