package com.aenzbi.comptabilite

import javafx.application.Application
import javafx.fxml.FXMLLoader
import javafx.scene.Scene
import javafx.stage.Stage

class Main : Application() {
    override fun start(primaryStage: Stage) {
        val loader = FXMLLoader(Main::class.java.getResource("/fxml/dashboard.fxml"))
        val scene = Scene(loader.load())
        primaryStage.scene = scene
        primaryStage.title = "Aenzbi Comptabilité"
        primaryStage.show()
    }
}

fun main() {
    Application.launch(Main::class.java)
}
