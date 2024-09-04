from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User, student, parent, advisor


class RegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['email', 'full_name', 'user_type', 'password1', 'password2']


class StudentForm(forms.ModelForm):
    class Meta:
        model = student
        fields = ['date_of_birth']


class ParentForm(forms.ModelForm):
    class Meta:
        model = parent
        fields = []


class AdvisorForm(forms.ModelForm):
    class Meta:
        model = advisor
        fields = ['specialization', 'experience']
