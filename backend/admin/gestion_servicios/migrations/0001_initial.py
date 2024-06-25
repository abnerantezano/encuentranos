# Generated by Django 5.0.6 on 2024-06-25 01:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('gestion_usuarios', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Servicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('descripcion', models.TextField()),
                ('imagen_url', models.CharField(blank=True, max_length=255, null=True)),
                ('fh_creacion', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ServicioProveedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precio', models.FloatField()),
                ('negociable', models.BooleanField()),
                ('id_proveedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gestion_usuarios.proveedor')),
                ('id_servicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gestion_servicios.servicio')),
            ],
            options={
                'unique_together': {('id_servicio', 'id_proveedor')},
            },
        ),
    ]
