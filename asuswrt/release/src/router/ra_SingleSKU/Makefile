
include $(BUILD_NAME)/config


SKUDIR = $(INSTALLDIR)/ra_SKU

SKU_FILES  = $(BUILD_NAME)/$(SKU_2G_FCC) $(BUILD_NAME)/$(SKU_2G_CE) $(BUILD_NAME)/$(SKU_5G_FCC) $(BUILD_NAME)/$(SKU_5G_CE)


# usage: $(call install_file, src_file, dest_file)
define install_file
	@( \
	if [ -e $(1) ]; then \
		install $(1) $(2) ; \
	else \
		echo "File ( $(1) ) not exist" ; exit 1; \
	fi; \
	)
endef



all clean:
	@if [ ! -d $(BUILD_NAME) ]; then \
		echo "No SingleSKU for $(BUILD_NAME)"; \
		exit 1; \
	fi

install: all
	-rm -rf $(TARGETDIR)/ra_SKU
	-rm -rf $(SKUDIR)
	@install -d $(SKUDIR)
ifneq ($(SKU_2G_FCC),)
	@install $(BUILD_NAME)/$(SKU_2G_FCC) $(SKUDIR)/SingleSKU_FCC.dat
endif
ifneq ($(SKU_2G_CE),)
	@install $(BUILD_NAME)/$(SKU_2G_CE)  $(SKUDIR)/SingleSKU_CE.dat
endif
ifneq ($(SKU_5G_FCC),)
	@install $(BUILD_NAME)/$(SKU_5G_FCC) $(SKUDIR)/SingleSKU_5G_FCC.dat
endif
ifneq ($(SKU_5G_CE),)
	@install $(BUILD_NAME)/$(SKU_5G_CE)  $(SKUDIR)/SingleSKU_5G_CE.dat
endif
ifneq ($(SKU_2G_SG),)
	@install $(BUILD_NAME)/$(SKU_2G_SG) $(SKUDIR)/SingleSKU_SG.dat
endif
ifneq ($(SKU_5G_SG),)
	@install $(BUILD_NAME)/$(SKU_5G_SG) $(SKUDIR)/SingleSKU_5G_SG.dat
endif
ifneq ($(SKU_2G_AU),)
	@install $(BUILD_NAME)/$(SKU_2G_AU) $(SKUDIR)/SingleSKU_AU.dat
endif
ifneq ($(SKU_5G_AU),)
	@install $(BUILD_NAME)/$(SKU_5G_AU) $(SKUDIR)/SingleSKU_5G_AU.dat
endif
ifneq ($(SKU_2G_NCC),)
	@install $(BUILD_NAME)/$(SKU_2G_NCC) $(SKUDIR)/SingleSKU_NCC.dat
endif
ifneq ($(SKU_5G_NCC),)
	@install $(BUILD_NAME)/$(SKU_5G_NCC) $(SKUDIR)/SingleSKU_5G_NCC.dat
endif
ifeq ("$(BUILD_NAME)","RT-AC52U")
	@install $(BUILD_NAME)/$(SKU_2G_FCC_V2) $(SKUDIR)/SingleSKU_FCC_0002.dat
	@install $(BUILD_NAME)/$(SKU_5G_FCC_V2) $(SKUDIR)/SingleSKU_5G_FCC_0002.dat
	@install $(BUILD_NAME)/$(SKU_2G_CE_V2) $(SKUDIR)/SingleSKU_CE_0002.dat
	@install $(BUILD_NAME)/$(SKU_5G_CE_V2) $(SKUDIR)/SingleSKU_5G_CE_0002.dat
endif



.PHONY: all clean nstall
.PHONY: $(BUILD_NAME)
