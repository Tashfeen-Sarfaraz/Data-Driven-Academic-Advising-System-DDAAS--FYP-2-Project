from django.urls import path
from .views import CustomLoginView, CustomForgetPasswordView, register

urlpatterns = [
    path('login/', CustomLoginView.as_view(), name='login'),
    path('forget-password/', CustomForgetPasswordView.as_view(), name='forget-password'),
    path('register/', register, name='register'),
]
