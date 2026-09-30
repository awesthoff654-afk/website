# Surface assets

Local 1024px diffuse, roughness and OpenGL normal maps from Poly Haven:

- `concrete-*.jpg`: [Hangar Concrete Floor](https://polyhaven.com/a/hangar_concrete_floor). Source physical scale documented by Poly Haven.
- `plaster-*.jpg`: [White Plaster 02](https://polyhaven.com/a/white_plaster_02), Rob Tuytel. Source physical tile width 1 m.

Both source assets are provided under [CC0](https://polyhaven.com/license). All maps are bundled locally; no runtime requests to Poly Haven are required. Rendering may attenuate normal/roughness and tint diffuse maps to represent cleaned gallery surfaces. Original asset maps remain in these files.

The Hangar Concrete Floor diffuse is normalized locally after loading to a neutral gallery concrete reflectance (sRGB midtone 144, source contrast retained at 22% around source midtone 53). This keeps photographed spatial variation while representing a cleaner finished surface. Normal response is attenuated to 0.065 to avoid exaggerated weathering. Original source files remain unchanged.
