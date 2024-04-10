from django.http import JsonResponse
from .models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    data = [company.to_json() for company in companies]
    return JsonResponse(data, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        data = company.to_json()
        return JsonResponse(data)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancy_set.all()
        data = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(data, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(data, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        data = vacancy.to_json()
        return JsonResponse(data)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"}, status=404)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(data, safe=False)
