package com.ambrosio.josue.tutorial.activities

import android.os.Bundle
import com.ambrosio.josue.tutorial.R
import com.ambrosio.josue.tutorial.generals.HeaderInclude

class CambiarContrasenaActivity : HeaderInclude() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cambiar_contrasena)

        setupHeader()
    }
}