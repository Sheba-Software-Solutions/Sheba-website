import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SnowEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Three.js Snow Effect
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

  
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    camera.position.z = 5;

    const snowflakes = [];
    for (let i = 0; i < 200; i++) {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array(3);
      vertices[0] = (Math.random() - 0.5) * 20;
      vertices[1] = (Math.random() - 0.5) * 20;
      vertices[2] = (Math.random() - 0.5) * 20;
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
      const snowflake = new THREE.Points(geometry, material);
      snowflakes.push(snowflake);
      scene.add(snowflake);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      snowflakes.forEach(snowflake => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -10) snowflake.position.y = 10;
      });
      renderer.render(scene, camera);
    };

    animate();

   
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

   
    return () => {
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default SnowEffect;