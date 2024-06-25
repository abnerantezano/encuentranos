package com.ambrosio.josue.tutorial.ui.activities

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import com.ambrosio.josue.tutorial.data.models.ClienteModel
import com.ambrosio.josue.tutorial.data.models.ContratoModel
import com.ambrosio.josue.tutorial.data.models.DetalleContratoModel
import com.ambrosio.josue.tutorial.data.models.DetalleContratoModeloId
import com.ambrosio.josue.tutorial.data.models.ProveedorModel
import com.ambrosio.josue.tutorial.data.models.ServicioModel
import com.ambrosio.josue.tutorial.data.models.ServicioProveedorModel
import com.ambrosio.josue.tutorial.data.models.UsuarioModel
import com.ambrosio.josue.tutorial.databinding.ActivityCrearContratoBinding
import com.ambrosio.josue.tutorial.generals.HeaderInclude
import com.ambrosio.josue.tutorial.ui.adapters.ServicioSpinnerAdapter
import com.ambrosio.josue.tutorial.ui.viewModels.CrearContratoViewModel
import com.ambrosio.josue.tutorial.ui.viewModels.InicioViewModel
import com.ambrosio.josue.tutorial.ui.viewModels.ServicioProveedorViewModel
import com.google.firebase.auth.FirebaseAuth
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class CrearContratoActivity : HeaderInclude() {

    private lateinit var binding: ActivityCrearContratoBinding
    private val servicioProveedorViewModel: ServicioProveedorViewModel by viewModels()
    private val crearContratoViewModel: CrearContratoViewModel by viewModels()
    private val inicioViewModel: InicioViewModel by viewModels()
    private lateinit var spinnerAdapter: ServicioSpinnerAdapter
    private var serviciosList: MutableList<ServicioProveedorModel> = mutableListOf()
    private var proveedorId: Int = -1
    private var idCliente: Int = -1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCrearContratoBinding.inflate(layoutInflater)
        setContentView(binding.root)

        spinnerAdapter = ServicioSpinnerAdapter(this, serviciosList)
        binding.spnServicio.adapter = spinnerAdapter

        proveedorId = intent.getIntExtra("PROVEEDOR_ID", -1)

        binding.btnEnviar.setOnClickListener {
            crearContrato()
        }

        val userEmail = FirebaseAuth.getInstance().currentUser?.email
        if (userEmail != null) {
            inicioViewModel.obtenerIdCliente(userEmail)
        }

        setupObservers()
        setupHeader()
        servicioProveedorViewModel.obtenerServicioProveedorPorIdProveedor(proveedorId)
    }

    private fun crearContrato() {
        val sdf = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())

        val idCliente = ClienteModel(idCliente)
        val fechaInicio = sdf.format(sdf.parse(binding.edtFechaInicio.text.toString()))
        val fechaFin = sdf.format(sdf.parse(binding.edtFechaFin.text.toString()))
        val estado = "Pendiente"
        val precioFinal = binding.edtPrecioServicio.text.toString().toDouble()
        val hiServicio = binding.edtHoraInicio.text.toString()
        val hfServicio = binding.edtHoraFin.text.toString()
        val fhCreacion = "2024-01-01"
        val servicioId = (binding.spnServicio.selectedItem as ServicioProveedorModel).idServicio.idServicio
        binding.tvServicio.text = idCliente.idCliente.toString()

        val contrato = ContratoModel(
            idContrato = 0,
            idCliente = idCliente,
            fechaInicio = fechaInicio,
            fechaFin = fechaFin,
            estado = estado,
            precioFinal = precioFinal,
            hiServicio = hiServicio,
            hfServicio = hfServicio,
            fhCreacion = fhCreacion
        )

        crearContratoViewModel.crearContrato(contrato) { newContrato ->
            if (newContrato != null) {
                val detalleContrato = DetalleContratoModel(
                    id = DetalleContratoModeloId(newContrato.idContrato, proveedorId, servicioId),
                    idProveedor = ProveedorModel(proveedorId),
                    idServicio = ServicioModel(servicioId),
                    idContrato = newContrato,
                    precioActual = precioFinal
                )

                crearContratoViewModel.crearDetalleContrato(detalleContrato) { newDetalleContrato ->
                    if (newDetalleContrato != null) {
                        Toast.makeText(this, "Contrato y detalle del contrato creados exitosamente", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(this, "Error al crear el detalle del contrato", Toast.LENGTH_SHORT).show()
                    }
                }
            } else {
                Toast.makeText(this, "Error al crear el contrato", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun setupObservers() {
        servicioProveedorViewModel.obtenerServicioProveedorPorIdProveedor.observe(this, Observer { servicios ->
            if (servicios != null) {
                spinnerAdapter.clear()
                spinnerAdapter.addAll(servicios)
                spinnerAdapter.notifyDataSetChanged()
            }
        })
    }
}
