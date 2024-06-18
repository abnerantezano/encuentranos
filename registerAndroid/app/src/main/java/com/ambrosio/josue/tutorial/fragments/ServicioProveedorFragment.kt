package com.ambrosio.josue.tutorial.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import com.ambrosio.josue.tutorial.adapters.ServicioProveedorAdapter
import com.ambrosio.josue.tutorial.databinding.ActivityServicioProveedorBinding
import com.ambrosio.josue.tutorial.viewModels.ServicioProveedorViewModel

class ServicioProveedorFragment : Fragment() {

    private var _binding: ActivityServicioProveedorBinding? = null
    private val binding get() = _binding!!
    private lateinit var servicioProveedorViewModel: ServicioProveedorViewModel
    private lateinit var adapter: ServicioProveedorAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?

    ): View? {
        _binding = ActivityServicioProveedorBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Mostrar el ProgressBar al iniciar la vista
        binding.progressBar.visibility = View.VISIBLE
        binding.recyclerViewProveedores.visibility = View.GONE // content es un contenedor que agrupa los demás elementos de la UI

        // Instancia del ViewModel sin argumentos
        servicioProveedorViewModel = ServicioProveedorViewModel()

        // Inicia la obtención de servicios proveedores
        servicioProveedorViewModel.obtenerServiciosProveedor()

        // Instanciar el adaptador con VIEW_TYPE_UNO
        adapter = ServicioProveedorAdapter(1)

        observeValues()
    }


    private fun observeValues() {
        servicioProveedorViewModel.listaServiciosProveedores.observe(viewLifecycleOwner, Observer { servicios ->
            binding.progressBar.visibility = View.GONE
            binding.recyclerViewProveedores.visibility = View.VISIBLE
            adapter.submitList(servicios)
            binding.recyclerViewProveedores.adapter = adapter
        })
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
