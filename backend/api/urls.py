from django.urls import path
from . import views


urlpatterns = [
    path("watchlist/", views.WatchListCreate.as_view(), name="watch-list"),
    path("watchlist/delete/<int:pk>", views.WatchListDelete.as_view(), name="delete-node"),
    path("search/", views.ListStocksView.as_view(), name="stock-search"),
    path("stock/<int:cik>", views.GetStocksView.as_view(), name="retrieve-stock-id"),
    path("stock/<int:cik>/filings", views.ListFilingsView.as_view(), name="company-filings")
]