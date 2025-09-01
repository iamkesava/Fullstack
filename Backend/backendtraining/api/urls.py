from django.urls import path
from .views import show_people

urlpatterns = [
    path('student/',show_people)
]