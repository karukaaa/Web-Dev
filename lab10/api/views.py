from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status,generics
from rest_framework.response import Response
from .models import Company, Vacancy
from . import serializers

class CompanyView(APIView):
    def get(self, request):
        queryset = Company.objects.all()
        serializer = serializers.CompanySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = serializers.CompanySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class VacancyView(APIView):
    def get(self, request):
        queryset = Vacancy.objects.all()
        serializer = serializers.VacancySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = serializers.VacancySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
            serializer = serializers.CompanySerializer(company)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

class VacancyDetailView(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            serializer = serializers.VacancySerializer(vacancy)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Vacancy.DoesNotExist:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)


class CompanyVacancyView(generics.ListAPIView):
    serializer_class = serializers.VacancySerializer

    def get_queryset(self):
        id = self.kwargs.get('id')
        try:
            company = Company.objects.get(id=id)
            vacancies = company.vacancy_set.all()
            return vacancies
        except Company.DoesNotExist:
            return Vacancy.objects.none()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class TopTenVacanciesView(generics.ListAPIView):
    serializer_class = serializers.VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]

# -----------------------------------------

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(data, safe=False)
