from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyView.as_view()),
    path('companies/<int:id>/', views.CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacancyView.as_view()),
    path('vacancies/', views.VacancyView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view()),
]
