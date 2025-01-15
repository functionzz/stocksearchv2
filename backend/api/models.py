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
    
# auto generated - do not change the table names
class BsDatapoints(models.Model):
    filing_adsh = models.ForeignKey('Filings', models.DO_NOTHING, db_column='filing_adsh')
    tag = models.CharField(max_length=255, blank=True, null=True)
    ddate = models.IntegerField(blank=True, null=True)
    qtrs = models.IntegerField(blank=True, null=True)
    uom = models.CharField(max_length=255, blank=True, null=True)
    value = models.DecimalField(max_digits=49, decimal_places=2, blank=True, null=True)
    report = models.IntegerField(blank=True, null=True)
    line = models.IntegerField(blank=True, null=True)
    plabel = models.CharField(max_length=1020, blank=True, null=True)
    negating = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_datapoints'


class CfDatapoints(models.Model):
    filing_adsh = models.ForeignKey('Filings', models.DO_NOTHING, db_column='filing_adsh')
    tag = models.CharField(max_length=255, blank=True, null=True)
    ddate = models.IntegerField(blank=True, null=True)
    qtrs = models.IntegerField(blank=True, null=True)
    uom = models.CharField(max_length=255, blank=True, null=True)
    value = models.DecimalField(max_digits=49, decimal_places=2, blank=True, null=True)
    report = models.IntegerField(blank=True, null=True)
    line = models.IntegerField(blank=True, null=True)
    plabel = models.CharField(max_length=1020, blank=True, null=True)
    negating = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cf_datapoints'


class Filings(models.Model):
    adsh = models.CharField(primary_key=True, max_length=255)
    stock_cik = models.ForeignKey('Stocks', models.DO_NOTHING, db_column='stock_cik', blank=True, null=True)
    form = models.CharField(max_length=255, blank=True, null=True)
    filed = models.IntegerField(blank=True, null=True)
    period = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'filings'


class IsDatapoints(models.Model):
    filing_adsh = models.ForeignKey(Filings, models.DO_NOTHING, db_column='filing_adsh')
    tag = models.CharField(max_length=255, blank=True, null=True)
    ddate = models.IntegerField(blank=True, null=True)
    qtrs = models.IntegerField(blank=True, null=True)
    uom = models.CharField(max_length=255, blank=True, null=True)
    value = models.DecimalField(max_digits=49, decimal_places=2, blank=True, null=True)
    report = models.IntegerField(blank=True, null=True)
    line = models.IntegerField(blank=True, null=True)
    plabel = models.CharField(max_length=1020, blank=True, null=True)
    negating = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'is_datapoints'


class Stocks(models.Model):
    cik = models.IntegerField(primary_key=True)
    ticker = models.CharField(max_length=255, blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'stocks'