# go-pkg-meta-proxy

Docker Image: https://github.com/orgs/jc-lab/packages/container/package/go-pkg-meta-proxy

```
docker pull ghcr.io/jc-lab/go-pkg-meta-proxy:latest
```

# Environments

### CONTEXT_PATH

Default: `/`

### PORT

Default: `8080`

### PKG_VCS

Default: `git`

### PKG_IMPORT_TEMPLATE

Example: `https://private-git-repository.com:1234/[PKG_NAME].git`

### PKG_SOURCE_TEMPLATE

Example: `https://private-git-repository.com:1234/[PKG_NAME] https://private-git-repository.com:1234/[PKG_NAME]/-/tree/master{/dir} https://private-git-repository.com:1234/[PKG_NAME]/-/blob/master{/dir}/{file}#L{line}`

# License

[Apache-2.0](./LICENSE)
