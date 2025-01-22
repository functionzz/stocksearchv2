from django.contrib.auth.models import User
from .models import *
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        return user

class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = ['id', 'stock_title', 'stock_subtitle', 'content', 'created_at', 'author']
        extra_kwargs = {'author': {'read_only': True}}

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stocks
        fields = ['cik', 'ticker', 'company_name']

class FilingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filings
        fields = ['adsh', 'stock_cik', 'form', 'filed', 'period']

class BalanceSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = BsDatapoints
        fields = ['filing_adsh', 'tag', 'ddate', 'qtrs', 'uom', 'value', 'report', 'line', 'plabel', 'negating']

class IncomeStatementSerializer(serializers.ModelSerializer):
    class Meta:
        model = BsDatapoints
        fields = ['filing_adsh', 'tag', 'ddate', 'qtrs', 'uom', 'value', 'report', 'line', 'plabel', 'negating']

class CashFlowSerializer(serializers.ModelSerializer):
    class Meta:
        model = BsDatapoints
        fields = ['filing_adsh', 'tag', 'ddate', 'qtrs', 'uom', 'value', 'report', 'line', 'plabel', 'negating']