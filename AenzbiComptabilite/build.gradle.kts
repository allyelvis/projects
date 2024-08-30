plugins {
    kotlin("jvm") version "1.8.21"
    application
}

group = "com.aenzbi"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib"))
    implementation("org.openjfx:javafx-controls:$JAVAFX_VERSION")
    implementation("org.openjfx:javafx-fxml:$JAVAFX_VERSION")
    testImplementation(kotlin("test"))
}

application {
    mainClass.set("com.aenzbi.comptabilite.MainKt")
    applicationDefaultJvmArgs = listOf(
        "--module-path", "${System.getProperty("javafx.home")}/lib",
        "--add-modules", "javafx.controls,javafx.fxml"
    )
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "11"
}
