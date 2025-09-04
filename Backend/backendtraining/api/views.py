from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import FileResponse
from .models import UploadedFile
from .serializers import UploadedFileSerializer

class UploadedFileViewSet(viewsets.ModelViewSet):
    queryset = UploadedFile.objects.all()
    serializer_class = UploadedFileSerializer

    # Custom download endpoint
    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        file_obj = self.get_object()
        response = FileResponse(file_obj.file.open('rb'))
        response['Content-Disposition'] = f'attachment; filename="{file_obj.file.name}"'
        return response

