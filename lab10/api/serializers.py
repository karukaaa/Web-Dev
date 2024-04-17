from rest_framework import serializers
from .models import Company,Vacancy

class CompanySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100)
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)
    

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']
