import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import ProfileCard from './ProfileCard';

interface Empleado {
  id: string;
  nombre: string;
  cargo: string;
  imagen: ImageSourcePropType;
}

const imagenPerfil = require('./assets/images/perfil.jpg');

const EMPLEADOS: Empleado[] = [
  { id: '1', nombre: 'Dylan Ramon', cargo: 'Desarrollador Full Stack', imagen: imagenPerfil },
  { id: '2', nombre: 'Ana Gomez', cargo: 'Diseñadora UI', imagen: imagenPerfil },
  { id: '3', nombre: 'Maria Gomez', cargo: 'Contadora', imagen: imagenPerfil },
  { id: '4', nombre: 'Andres Castillo', cargo: 'QA', imagen: imagenPerfil },
  { id: '5', nombre: 'Pronostar', cargo: 'Desarrollador', imagen: imagenPerfil },
];

function normalizar(texto: string) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export default function EmployeeList() {
  const [busqueda, setBusqueda] = useState('');
  const consulta = normalizar(busqueda);
  const empleadosFiltrados = EMPLEADOS.filter((empleado) =>
    normalizar(`${empleado.nombre} ${empleado.cargo}`).includes(consulta)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Directorio de Empleados</Text>
      <TextInput
        style={styles.search}
        placeholder="Buscar empleado..."
        placeholderTextColor="#6b7280"
        accessibilityLabel="Buscar empleado por nombre o cargo"
        value={busqueda}
        onChangeText={setBusqueda}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      <FlatList
        style={styles.list}
        data={empleadosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard nombre={item.nombre} cargo={item.cargo} imagen={item.imagen} />
        )}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        ListEmptyComponent={
          <Text style={styles.empty}>No se encontraron empleados.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  search: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#f9fafb',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  empty: {
    textAlign: 'center',
    color: '#666666',
    padding: 24,
    fontSize: 16,
  },
});
