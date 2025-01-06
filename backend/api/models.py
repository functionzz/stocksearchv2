from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class WatchList(models.Model):
    stock_title = models.CharField(max_length=64)
    stock_subtitle = models.CharField(max_length=128)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='watchlist')

    def __str__(self):
        return self.stock_name