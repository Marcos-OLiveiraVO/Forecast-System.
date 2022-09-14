import "./Util/module-alias";
import { Server } from "@overnightjs/core";
import express from "express";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }
}
