from django import forms

class SignupForm(forms.Form):
    name = forms.CharField(label="name", widget=forms.TextInput(attrs={'id':'name','placeholder': 'Username'}))
    email = forms.EmailField(label="email", widget=forms.TextInput(attrs={'id':'email','placeholder': 'Your Email!'}))
    password = forms.CharField(label="pass", widget=forms.TextInput(attrs={'id':'pass','placeholder': 'Password'}))