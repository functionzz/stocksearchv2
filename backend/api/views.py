from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, WatchlistSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import WatchList

# ListCreateAPIView -> Can list querylist, and create new Object
# CreateAPIView -> Can create new object


# IMPORTANT
# defining classes removes the need to define specific post methods
# overriding methods just changes functionality of premade functions in said classes
# for example, creating an Object automatically does everything


class WatchListCreate(generics.ListCreateAPIView):
    serializer_class = WatchlistSerializer

    # only works when passing JWT auth
    permission_classes = [IsAuthenticated]

    # gets list of author owned Watchlist items
    def get_queryset(self):

        # lot of stuff behind the scenes: basically, since we already authenicated, request definitely has a user
        user = self.request.user
        return WatchList.objects.filter(author=user)
    
    def perform_create(self, serializer):

        # serializer checks validity of passed data, then save if its good.
        # ascribes request user to author, as we had author as read_only
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class WatchListDelete(generics.DestroyAPIView):
    serializer_class = WatchlistSerializer
    permission_classes = [IsAuthenticated]

    # gets list of author owned Watchlist items
    def get_queryset(self):
        user = self.request.user
        return WatchList.objects.filter(author=user)




class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


