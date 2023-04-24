import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { BarCodeReadEvent } from 'react-native-camera/types';
// function QRCodeScannerScreen() {
//   // 扫描成功后的回调函数
//   const handleQRCodeScan = ({ data }) => {
//     console.log('QR code scanned:', data);
//     // 扫描到二维码后的处理逻辑
//   };

//   return (
//     <QRCodeScanner
//       onRead={handleQRCodeScan}
//       cameraStyle={StyleSheet.absoluteFillObject}
//     />
//   );
// }

// function BarcodeScannerScreen() {
//   const [isBarcodeRecognized, setIsBarcodeRecognized] = useState(false);

//   // 扫描成功后的回调函数
//   const handleBarcodeScan = (event) => {
//     if (event.data && !isBarcodeRecognized) {
//       setIsBarcodeRecognized(true);
//       console.log('Barcode scanned:', event.data);
//       // 扫描到条形码后的处理逻辑
//       Alert.alert('Barcode scanned', event.data, [{ text: 'OK' }], {
//         onDismiss: () => setIsBarcodeRecognized(false),
//       });
//     }
//   };

//   return (
//     <RNCamera
//       style={StyleSheet.absoluteFillObject}
//       onBarCodeRead={handleBarcodeScan}
//       captureAudio={false}
//       androidCameraPermissionOptions={{
//         title: 'Permission to use camera',
//         message: 'We need your permission to use your camera',
//         buttonPositive: 'OK',
//         buttonNegative: 'Cancel',
//       }}
//     />
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      {/* <QRCodeScannerScreen /> */}
      {/* <BarcodeScannerScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});