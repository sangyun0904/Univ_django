from django import forms

class SignupForm(forms.Form):

    name = forms.CharField(
        widget = forms.TextInput(attrs={'id':'name','placeholder': 'Username'})
    )
    email = forms.CharField(
        widget = forms.EmailInput(attrs={'id':'email','placeholder': 'Your Email!'})
    )
    password = forms.CharField(
        widget = forms.PasswordInput(attrs={'id':'pass','placeholder': 'Password'})
    )