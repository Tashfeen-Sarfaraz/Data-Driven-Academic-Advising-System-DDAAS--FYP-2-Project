from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegistrationForm, StudentForm, ParentForm, AdvisorForm
from .models import User
from django.contrib.auth.views import LoginView, PasswordResetView


# Registration view
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            user_type = form.cleaned_data.get('user_type')
            if user_type == 'student':
                student_form = StudentForm(request.POST)
                if student_form.is_valid():
                    student = student_form.save(commit=False)
                    student.user = user
                    student.save()
            elif user_type == 'parent':
                parent_form = ParentForm(request.POST)
                if parent_form.is_valid():
                    parent = parent_form.save(commit=False)
                    parent.user = user
                    parent.save()
            elif user_type == 'advisor':
                advisor_form = AdvisorForm(request.POST)
                if advisor_form.is_valid():
                    advisor = advisor_form.save(commit=False)
                    advisor.user = user
                    advisor.save()
            return redirect('login')
    else:
        form = RegistrationForm()
    return render(request, 'accounts/register.html', {'form': form})


# Custom Login View
class CustomLoginView(LoginView):
    template_name = 'accounts/login.html'


# Custom Forget Password View
class CustomForgetPasswordView(PasswordResetView):
    template_name = 'accounts/forget.html'
