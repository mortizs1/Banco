export class Address{
    constructor(
        public TipoTarjetaSolicitar:string,
        public TipoSolicitud:string,
        public DocumentoTitular:number,
        public NombreTitular:string,
        public NombreRealce:string,
        public Franquicia:string,
        public TipoTarjetaSolicitada:string,
        public Exoneracion:number,
        public CuotaManejo:number,
        public Ciclo:number,
        public Cupo:number,
        public SucursalRadicacion:string,
        public CodigoAsesor:number,
        public CodigoReferido:number,
        public TipoDebitoAutomatico:string,

    ){}
}