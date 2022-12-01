from django import forms

class SignupForm(forms.Form):

    name = forms.TextInput(attrs={'id':'name','placeholder': 'Username'})
    email = forms.EmailInput(attrs={'id':'email','placeholder': 'Your Email!'})
    password = forms.PasswordInput(attrs={'id':'pass','placeholder': 'Password'})