from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def show_people(request):
    data={"message":"Hello I am kesavan"}
    return Response(data)

@api_view(['GET'])
def show_person(request):
    data={'message':"Kesava"}
    return Response(data)