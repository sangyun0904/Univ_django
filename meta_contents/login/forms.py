from django import forms

class SignupForm(forms.Form):

    name = forms.Charfield(
        widget = forms.TextInput(attrs={'id':'name','placeholder': 'Username'})
    )
    email = forms.Charfield(
        widget = forms.EmailInput(attrs={'id':'email','placeholder': 'Your Email!'})
    )
    password = forms.Charfield(
        widget = forms.PasswordInput(attrs={'id':'pass','placeholder': 'Password'})
    )