export default class vCarnetizacionPlain {
    btNuevaSolicitud;
    lblDetalleSolicitud;
    lblTotalRecaudado;
    lblCantidadReposiciones;
    lblTiempoTotalEmision;
    lblPromedioTiempoEmision;
    constructor() {
        this.btNuevaSolicitud = document.getElementById("body_btNuevaSolicitud");
        this.lblDetalleSolicitud = document.getElementById("body_lblDetalleSolicitud");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones");
        this.lblTiempoTotalEmision = document.getElementById("body_lblTiempoTotalEmision");
        this.lblPromedioTiempoEmision = document.getElementById("body_lblPromedioTiempoEmision");
    }
    onNuevaSolicitud(callback) {
        this.btNuevaSolicitud.onclick = callback;
    }
    reportar({ detalleSolicitud, totalRecaudado, cantidadReposiciones, tiempoTotalEmision, promedioTiempoEmision }) {
        const linea = document.createElement("div");
        linea.textContent = detalleSolicitud;
        this.lblDetalleSolicitud.appendChild(linea);
        this.lblTotalRecaudado.innerHTML = `${totalRecaudado}`;
        this.lblCantidadReposiciones.innerHTML = `${cantidadReposiciones}`;
        this.lblTiempoTotalEmision.innerHTML = `${tiempoTotalEmision}`;
        this.lblPromedioTiempoEmision.innerHTML = `${promedioTiempoEmision}`;
    }
}
//# sourceMappingURL=vCarnetizacionPlain.js.map