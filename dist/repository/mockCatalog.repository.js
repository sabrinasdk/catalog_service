"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCatalogRepository = void 0;
class MockCatalogRepository {
    async create(data) {
        return data;
    }
    async update(data) {
        return data;
    }
    async delate(id) {
        return {};
    }
    async find() {
        return [];
    }
    async findOne(id) {
        throw new Error("Method not implemented.");
    }
}
exports.MockCatalogRepository = MockCatalogRepository;
