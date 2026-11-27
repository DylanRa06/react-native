import { Image, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

interface ProfileCardProps {
  nombre: string;
  cargo: string;
  imagen: ImageSourcePropType;
}

export default function ProfileCard({ nombre, cargo, imagen }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.image} accessibilityLabel={`Perfil de ${nombre}`} />
      <Text style={styles.name}>{nombre}</Text>
      <Text style={styles.description}>{cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },
});
