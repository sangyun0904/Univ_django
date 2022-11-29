from django import forms

name = forms.TextInput(attrs={'id':'name','placeholder': 'Username'})
email = forms.EmailInput(attrs={'id':'email','placeholder': 'Your Email!'})
password = forms.TextInput(attrs={'id':'pass','placeholder': 'Password'})