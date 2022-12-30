import { Logger } from '@nestjs/common';
import {
        ExternalDocumentationObject,
        SecuritySchemeObject,
        TagObject,
} from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { isUndefined, negate, pickBy } from 'lodash';
import {
        ContactObject,
        LicenseObject,
        OpenrpcDocument,
        ServerObject,
} from './interfaces'

export class OpenRpcDocumentBuilder {
        private readonly logger = new Logger(OpenRpcDocumentBuilder.name);
        private readonly buildDocumentBase = (): Omit<
                OpenrpcDocument,
                'methods'
        > => ({

                info: {
                        title: "",
                        description: "",
                        termsOfService: "",
                        version: '1.0.0',
                        contact: {},
                        license: {},
                },
                servers: [],
                components: {},
        })

        private readonly document: Omit<OpenrpcDocument, 'methods'> =
                this.buildDocumentBase();

        public setTitle(title: string): this {
                this.document.info.title = title;
                return this;
        }

        public setDescription(description: string): this {
                this.document.info.description = description;
                return this;
        }

        public setVersion(version: string): this {
                this.document.info.version = version;
                return this;
        }

        public setTermsOfService(termsOfService: string): this {
                this.document.info.termsOfService = termsOfService;
                return this;
        }

        public setContact(contact:ContactObject): this {
                this.document.info.contact = contact;
                return this;
        }

        public setLicense(license:LicenseObject): this {
                this.document.info.license = license;
                return this;
        }

        public addServer(server:ServerObject):this {
                this.document.servers.push(server)
                return this
        }

        public build():Omit<OpenrpcDocument, 'components'| 'methods'> {
                return this.document;
        }
}