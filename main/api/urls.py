from rest_framework import routers

from main.api import endpoints

router = routers.SimpleRouter()

router.register(r'profiles', endpoints.ProfileView)
router.register(r'univerities', endpoints.UniversityView)
router.register(r'fields', endpoints.FieldView)
router.register(r'courses', endpoints.CourseView)
router.register(r'records', endpoints.RecordView)

urlpatterns = router.urls