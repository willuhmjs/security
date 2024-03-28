#include <Servo.h>

Servo servoMotor;  // Create a servo object to control the servo motor
int angle = 90;    // Initial angle set to 90 degrees

void setup() {
  Serial.begin(9600);  // Initialize serial communication
  servoMotor.attach(9);  // Attach the servo to pin 9
  servoMotor.write(angle);  // Set initial angle
}

void loop() {
  if (Serial.available() > 0) {  // Check if data is available to read
    int receivedAngle = Serial.parseInt();  // Read the angle value from serial
    angle = constrain(receivedAngle, 10, 170);  // Constrain angle between 10 and 170 degrees
    servoMotor.write(angle);  // Move the servo to the constrained angle
  }
}
