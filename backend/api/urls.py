from django.urls import path
from . import views


urlpatterns = [
    path("watchlist/", views.WatchListCreate.as_view(), name="watch-list"),
    path("watchlist/delete/<int:pk>", views.WatchListDelete.as_view(), name="delete-node")
]