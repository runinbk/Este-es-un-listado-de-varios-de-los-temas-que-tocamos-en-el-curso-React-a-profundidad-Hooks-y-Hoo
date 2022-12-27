describe("Pruebas en <DemoComponenrt />", () => {
  test("Esta prueva no debe fallar", () => {
    // 1. Inicialización
    const mensaje = "Hola Mundo";
    // 2. Estímulo
    const mensaje2 = mensaje.trim();
    // 3. Observar el comportamiento
    expect(mensaje2).toBe(mensaje);
  });
});
