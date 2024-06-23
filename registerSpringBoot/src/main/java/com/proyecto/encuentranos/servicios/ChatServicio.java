package com.proyecto.encuentranos.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.encuentranos.modelos.ChatModelo;
import com.proyecto.encuentranos.repositorios.IChatRepositorio;


@Service
public class ChatServicio {

    private final IChatRepositorio chatRepositorio;

    @Autowired
    public ChatServicio(IChatRepositorio chatRepositorio) {
        this.chatRepositorio = chatRepositorio;
    }

    public List<ChatModelo> listarChats() {
        return chatRepositorio.findAll();
    }

    public Optional<ChatModelo> buscarChatPorId(Integer id) {
        return chatRepositorio.findById(id);
    }

    public ChatModelo agregarChat(ChatModelo chat) {
        return chatRepositorio.save(chat);
    }
}