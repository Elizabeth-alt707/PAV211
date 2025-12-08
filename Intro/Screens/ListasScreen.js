 // Importamos los componentes necesarios desde React Native
import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'

// Función principal del componente
export default function ListScreen() {

    // --- FlatList ---
    // Se crea un arreglo con ejercicios (cada uno tiene id, nombre y descripción)
    const ejercicios = [
        { id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos' },
        { id: '2', nombre: 'Lagartijas', descripcion: 'Fortalece pecho, hombros y tríceps' },
        { id: '3', nombre: 'Plancha', descripcion: 'Ejercicio de core para abdomen y espalda baja' },
        { id: '4', nombre: 'Zancadas', descripcion: 'Trabaja piernas, glúteos y equilibrio' },
        { id: '5', nombre: 'Burpees', descripcion: 'Ejercicio cardiovascular de cuerpo completo' },
        { id: '6', nombre: 'Abdominales', descripcion: 'Fortalece la zona del abdomen' },
        { id: '7', nombre: 'Elevaciones de talón', descripcion: 'Ejercicio para trabajar pantorrillas' },
        { id: '8', nombre: 'Jumping Jacks', descripcion: 'Movimiento aeróbico para calentar y quemar calorías' },
        { id: '9', nombre: 'Bicicleta abdominal', descripcion: 'Ejercicio de abdomen oblicuo y core' },
        { id: '10', nombre: 'Superman', descripcion: 'Fortalece la espalda baja y glúteos' }
    ]

    // --- SectionList ---
    // Cada sección representa una letra (A-Z) con una lista de contactos
    const contactos = [
        { titulo: 'A', data: ['Alejandra', 'Ana de las tortillas', 'Adele'] },
        { titulo: 'B', data: ['Brenda', 'Bruno', 'Bárbara'] },
        { titulo: 'C', data: ['Carlos', 'Camila', 'Cristina'] },
        { titulo: 'D', data: ['Daniela', 'Diego', 'Dulce'] },
        { titulo: 'E', data: ['Elena', 'Eduardo', 'Emiliano'] },
        { titulo: 'F', data: ['Fernanda', 'Fernando', 'Fabián'] },
        { titulo: 'G', data: ['Gabriela', 'Guillermo', 'Gael'] },
        { titulo: 'H', data: ['Héctor', 'Hanna', 'Hugo'] },
        { titulo: 'I', data: ['Iván', 'Isabel', 'Iris'] },
        { titulo: 'J', data: ['Juan', 'Jimena', 'José'] },
        { titulo: 'K', data: ['Karla', 'Kevin', 'Kenia'] },
        { titulo: 'L', data: ['Luis', 'Lucía', 'Leonardo'] },
        { titulo: 'M', data: ['María', 'Miguel', 'Mauricio'] },
        { titulo: 'N', data: ['Natalia', 'Néstor', 'Nayeli'] },
        { titulo: 'O', data: ['Oscar', 'Olivia', 'Omar'] },
        { titulo: 'P', data: ['Patricia', 'Pablo', 'Paola'] },
        { titulo: 'Q', data: ['Querubin', 'Quetzalli', 'Quintín'] },
        { titulo: 'R', data: ['Raúl', 'Romina', 'Ricardo'] },
        { titulo: 'S', data: ['Sofía', 'Santiago', 'Silvia'] },
        { titulo: 'T', data: ['Tamara', 'Tomás', 'Teresa'] },
        { titulo: 'U', data: ['Ulises', 'Uriel', 'Úrsula'] },
        { titulo: 'V', data: ['Valeria', 'Víctor', 'Vanessa'] },
        { titulo: 'W', data: ['William', 'Wendy', 'Walter'] },
        { titulo: 'X', data: ['Ximena', 'Xavier', 'Xóchitl'] },
        { titulo: 'Y', data: ['Yazmín', 'Yahir', 'Yolanda'] },
        { titulo: 'Z', data: ['Zulema', 'Zabdiel', 'Zaira'] },
    ]

    // --- Renderizado en pantalla ---
    return (
        // Vista principal que contiene ambas listas
        <View style={styles.container}>

            {/* ------- LISTA DE EJERCICIOS (FlatList) ------- */}
            <View style={styles.listContainer}>
                <Text style={styles.titulo}> Lista De Ejercicios </Text>

                {/* FlatList recorre el arreglo 'ejercicios' y muestra cada elemento */}
                <FlatList
                    data={ejercicios} // Fuente de datos
                    renderItem={({ item }) => ( // Cómo se mostrará cada elemento
                        <View style={styles.item}>
                            <Text style={styles.nombre}> {item.nombre} </Text>
                            <Text style={styles.descripcion}> {item.descripcion} </Text>
                        </View>
                    )}
                />
            </View>

            {/* ------- LISTA DE CONTACTOS (SectionList) ------- */}
            <View style={styles.listContainer}>
                <Text style={styles.titulo}> Contactos </Text>

                {/* SectionList agrupa los contactos por letra inicial */}
                <SectionList
                    sections={contactos} // Fuente de datos por secciones
                    renderItem={({ item }) => (
                        // Cada contacto se muestra dentro de un Text
                        <Text style={styles.item}> {item} </Text>
                    )}

                    renderSectionHeader={({ section }) => (
                        // Título de cada sección (A, B, C...)
                        <Text style={styles.header}> {section.titulo} </Text>
                    )}
                />
            </View>
        </View>
    )
}

// --- Estilos visuales ---
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda la pantalla
        padding: 10,
        backgroundColor: '#60c09bff', // Fondo verde claro
    },
    listContainer: {
        flex: 1, // Cada lista ocupa una parte del espacio
        marginBottom: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    item: {
        padding: 10,
        backgroundColor: '#1eb178ff', // Fondo verde más oscuro
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5, // Bordes redondeados
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descripcion: {
        fontSize: 15,
        color: '#000000ff', 
    },
    header: {
        fontSize: 20,
        backgroundColor: '#5e9c85ff', // Color del encabezado de sección
        padding: 10,
        marginTop: 10,
    },
})