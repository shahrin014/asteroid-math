export class Vector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  addSpeedDirection(speed, theta, phi = Math.PI / 2.0) {
    // Calculate the components
    const dx = -speed * Math.sin(phi) * Math.sin(theta);
    const dy = -speed * Math.sin(phi) * Math.cos(theta);
    const dz = -speed * Math.cos(phi);
    // New position
    this.x += dx;
    this.y += dy;
    this.z += dz;
  }
}
