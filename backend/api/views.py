from rest_framework.viewsets import ModelViewSet
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer

from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def create_admin_once(request):
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser(
            username="elda",
            email="cybahuntaa@gmail.com",
            password="emily@1"
        )
        return Response({"status": "admin created"})
    return Response({"status": "admin already exists"})


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer

class ContactViewSet(ModelViewSet):
    queryset = Contact.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer