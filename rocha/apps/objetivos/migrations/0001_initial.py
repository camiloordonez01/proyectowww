# Generated by Django 2.2.4 on 2019-08-06 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Objetivo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('objetivo', models.TextField()),
                ('indicador', models.TextField()),
                ('meta', models.TextField()),
                ('iniciativa', models.TextField()),
            ],
        ),
    ]
