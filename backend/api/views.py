from rest_framework.viewsets import ModelViewSet
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer

class ContactViewSet(ModelViewSet):
    queryset = Contact.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer