from rest_framework import serializers
from .models import Project, Contact


class ProjectSerializer(serializers.ModelSerializer):
   class Meta:
        model = Project
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
        read_only_fields = ["created_at"]
