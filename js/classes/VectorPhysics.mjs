import { Vec3 } from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

export class VectorPhysics extends Vec3 {
  static fromSpeedDirection = (speed, theta, phi = Math.PI / 2.0) => {
    // Calculate the components
    const dx = -speed * Math.sin(phi) * Math.sin(theta);
    const dy = -speed * Math.sin(phi) * Math.cos(theta);
    const dz = -speed * Math.cos(phi);

    const dV = new VectorPhysics(dx, dy, dz);
    return dV;
  };
}
