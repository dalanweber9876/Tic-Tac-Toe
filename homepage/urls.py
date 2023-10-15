from django.urls import path
from . import views

urlpatterns = [
    
    # Set up the correct paths for navigation through the webapp. 
    path('', views.homepage, name='homepage'),
    path('homepage/', views.homepage, name='homepage'),
    path('game/', views.game, name='game'),
]